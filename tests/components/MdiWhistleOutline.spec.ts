
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWhistleOutline from "../../src/components/MdiWhistleOutline.vue";

test("MdiWhistleOutline snapshot", () => {
  const wrapper = mount(MdiWhistleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
