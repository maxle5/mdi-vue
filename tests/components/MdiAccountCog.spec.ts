
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountCog from "../../src/components/MdiAccountCog.vue";

test("MdiAccountCog snapshot", () => {
  const wrapper = mount(MdiAccountCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
