
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarrot from "../../src/components/MdiCarrot.vue";

test("MdiCarrot snapshot", () => {
  const wrapper = mount(MdiCarrot, {});
  expect(wrapper.html()).toMatchSnapshot();
});
