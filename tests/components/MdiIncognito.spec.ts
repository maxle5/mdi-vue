
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIncognito from "../../src/components/MdiIncognito.vue";

test("MdiIncognito snapshot", () => {
  const wrapper = mount(MdiIncognito, {});
  expect(wrapper.html()).toMatchSnapshot();
});
