
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEggOutline from "../../src/components/MdiEggOutline.vue";

test("MdiEggOutline snapshot", () => {
  const wrapper = mount(MdiEggOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
