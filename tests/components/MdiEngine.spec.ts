
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEngine from "../../src/components/MdiEngine.vue";

test("MdiEngine snapshot", () => {
  const wrapper = mount(MdiEngine, {});
  expect(wrapper.html()).toMatchSnapshot();
});
