
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPawOutline from "../../src/components/MdiPawOutline.vue";

test("MdiPawOutline snapshot", () => {
  const wrapper = mount(MdiPawOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
