
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGeneratorPortable from "../../src/components/MdiGeneratorPortable.vue";

test("MdiGeneratorPortable snapshot", () => {
  const wrapper = mount(MdiGeneratorPortable, {});
  expect(wrapper.html()).toMatchSnapshot();
});
