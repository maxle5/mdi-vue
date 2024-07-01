
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVanish from "../../src/components/MdiVanish.vue";

test("MdiVanish snapshot", () => {
  const wrapper = mount(MdiVanish, {});
  expect(wrapper.html()).toMatchSnapshot();
});
