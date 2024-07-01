
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDog from "../../src/components/MdiDog.vue";

test("MdiDog snapshot", () => {
  const wrapper = mount(MdiDog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
