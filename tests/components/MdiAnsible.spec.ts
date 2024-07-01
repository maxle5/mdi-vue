
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAnsible from "../../src/components/MdiAnsible.vue";

test("MdiAnsible snapshot", () => {
  const wrapper = mount(MdiAnsible, {});
  expect(wrapper.html()).toMatchSnapshot();
});
