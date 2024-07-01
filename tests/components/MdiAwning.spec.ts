
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAwning from "../../src/components/MdiAwning.vue";

test("MdiAwning snapshot", () => {
  const wrapper = mount(MdiAwning, {});
  expect(wrapper.html()).toMatchSnapshot();
});
