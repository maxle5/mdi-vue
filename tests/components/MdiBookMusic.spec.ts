
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookMusic from "../../src/components/MdiBookMusic.vue";

test("MdiBookMusic snapshot", () => {
  const wrapper = mount(MdiBookMusic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
