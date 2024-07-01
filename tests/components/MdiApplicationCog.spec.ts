
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationCog from "../../src/components/MdiApplicationCog.vue";

test("MdiApplicationCog snapshot", () => {
  const wrapper = mount(MdiApplicationCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
