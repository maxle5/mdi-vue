
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChiliMedium from "../../src/components/MdiChiliMedium.vue";

test("MdiChiliMedium snapshot", () => {
  const wrapper = mount(MdiChiliMedium, {});
  expect(wrapper.html()).toMatchSnapshot();
});
