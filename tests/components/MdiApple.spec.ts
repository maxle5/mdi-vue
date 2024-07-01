
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApple from "../../src/components/MdiApple.vue";

test("MdiApple snapshot", () => {
  const wrapper = mount(MdiApple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
