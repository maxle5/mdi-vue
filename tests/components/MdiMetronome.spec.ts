
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMetronome from "../../src/components/MdiMetronome.vue";

test("MdiMetronome snapshot", () => {
  const wrapper = mount(MdiMetronome, {});
  expect(wrapper.html()).toMatchSnapshot();
});
