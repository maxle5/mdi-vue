
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileArrowLeftRight from "../../src/components/MdiFileArrowLeftRight.vue";

test("MdiFileArrowLeftRight snapshot", () => {
  const wrapper = mount(MdiFileArrowLeftRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
