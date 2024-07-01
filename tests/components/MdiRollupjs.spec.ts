
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRollupjs from "../../src/components/MdiRollupjs.vue";

test("MdiRollupjs snapshot", () => {
  const wrapper = mount(MdiRollupjs, {});
  expect(wrapper.html()).toMatchSnapshot();
});
