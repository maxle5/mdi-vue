
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWrenchCog from "../../src/components/MdiWrenchCog.vue";

test("MdiWrenchCog snapshot", () => {
  const wrapper = mount(MdiWrenchCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
