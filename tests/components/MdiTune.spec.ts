
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTune from "../../src/components/MdiTune.vue";

test("MdiTune snapshot", () => {
  const wrapper = mount(MdiTune, {});
  expect(wrapper.html()).toMatchSnapshot();
});
