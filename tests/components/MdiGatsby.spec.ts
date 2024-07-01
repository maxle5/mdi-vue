
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGatsby from "../../src/components/MdiGatsby.vue";

test("MdiGatsby snapshot", () => {
  const wrapper = mount(MdiGatsby, {});
  expect(wrapper.html()).toMatchSnapshot();
});
