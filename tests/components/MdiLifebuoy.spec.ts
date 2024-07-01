
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLifebuoy from "../../src/components/MdiLifebuoy.vue";

test("MdiLifebuoy snapshot", () => {
  const wrapper = mount(MdiLifebuoy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
