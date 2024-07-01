
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShakerOutline from "../../src/components/MdiShakerOutline.vue";

test("MdiShakerOutline snapshot", () => {
  const wrapper = mount(MdiShakerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
