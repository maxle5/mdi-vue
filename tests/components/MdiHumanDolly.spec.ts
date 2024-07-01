
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanDolly from "../../src/components/MdiHumanDolly.vue";

test("MdiHumanDolly snapshot", () => {
  const wrapper = mount(MdiHumanDolly, {});
  expect(wrapper.html()).toMatchSnapshot();
});
