
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBallot from "../../src/components/MdiBallot.vue";

test("MdiBallot snapshot", () => {
  const wrapper = mount(MdiBallot, {});
  expect(wrapper.html()).toMatchSnapshot();
});
