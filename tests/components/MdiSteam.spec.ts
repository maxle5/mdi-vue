
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSteam from "../../src/components/MdiSteam.vue";

test("MdiSteam snapshot", () => {
  const wrapper = mount(MdiSteam, {});
  expect(wrapper.html()).toMatchSnapshot();
});
