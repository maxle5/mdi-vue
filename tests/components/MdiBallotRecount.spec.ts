
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBallotRecount from "../../src/components/MdiBallotRecount.vue";

test("MdiBallotRecount snapshot", () => {
  const wrapper = mount(MdiBallotRecount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
