
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSetLeftRight from "../../src/components/MdiSetLeftRight.vue";

test("MdiSetLeftRight snapshot", () => {
  const wrapper = mount(MdiSetLeftRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
