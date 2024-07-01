
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNpm from "../../src/components/MdiNpm.vue";

test("MdiNpm snapshot", () => {
  const wrapper = mount(MdiNpm, {});
  expect(wrapper.html()).toMatchSnapshot();
});
