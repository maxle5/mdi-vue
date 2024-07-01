
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileMusic from "../../src/components/MdiFileMusic.vue";

test("MdiFileMusic snapshot", () => {
  const wrapper = mount(MdiFileMusic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
