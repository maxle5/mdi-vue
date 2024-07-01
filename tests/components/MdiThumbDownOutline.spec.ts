
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThumbDownOutline from "../../src/components/MdiThumbDownOutline.vue";

test("MdiThumbDownOutline snapshot", () => {
  const wrapper = mount(MdiThumbDownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
