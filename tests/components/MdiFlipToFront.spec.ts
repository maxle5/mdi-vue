
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlipToFront from "../../src/components/MdiFlipToFront.vue";

test("MdiFlipToFront snapshot", () => {
  const wrapper = mount(MdiFlipToFront, {});
  expect(wrapper.html()).toMatchSnapshot();
});
