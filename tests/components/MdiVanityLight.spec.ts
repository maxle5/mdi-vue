
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVanityLight from "../../src/components/MdiVanityLight.vue";

test("MdiVanityLight snapshot", () => {
  const wrapper = mount(MdiVanityLight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
