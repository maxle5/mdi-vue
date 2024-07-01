
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGrain from "../../src/components/MdiGrain.vue";

test("MdiGrain snapshot", () => {
  const wrapper = mount(MdiGrain, {});
  expect(wrapper.html()).toMatchSnapshot();
});
