
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMosqueOutline from "../../src/components/MdiMosqueOutline.vue";

test("MdiMosqueOutline snapshot", () => {
  const wrapper = mount(MdiMosqueOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
