
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRollerblade from "../../src/components/MdiRollerblade.vue";

test("MdiRollerblade snapshot", () => {
  const wrapper = mount(MdiRollerblade, {});
  expect(wrapper.html()).toMatchSnapshot();
});
