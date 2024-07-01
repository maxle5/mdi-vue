
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStomach from "../../src/components/MdiStomach.vue";

test("MdiStomach snapshot", () => {
  const wrapper = mount(MdiStomach, {});
  expect(wrapper.html()).toMatchSnapshot();
});
