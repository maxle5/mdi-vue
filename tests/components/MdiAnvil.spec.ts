
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAnvil from "../../src/components/MdiAnvil.vue";

test("MdiAnvil snapshot", () => {
  const wrapper = mount(MdiAnvil, {});
  expect(wrapper.html()).toMatchSnapshot();
});
