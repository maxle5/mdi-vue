
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAllInclusive from "../../src/components/MdiAllInclusive.vue";

test("MdiAllInclusive snapshot", () => {
  const wrapper = mount(MdiAllInclusive, {});
  expect(wrapper.html()).toMatchSnapshot();
});
