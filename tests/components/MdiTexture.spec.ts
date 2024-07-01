
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTexture from "../../src/components/MdiTexture.vue";

test("MdiTexture snapshot", () => {
  const wrapper = mount(MdiTexture, {});
  expect(wrapper.html()).toMatchSnapshot();
});
