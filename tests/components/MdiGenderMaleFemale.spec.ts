
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGenderMaleFemale from "../../src/components/MdiGenderMaleFemale.vue";

test("MdiGenderMaleFemale snapshot", () => {
  const wrapper = mount(MdiGenderMaleFemale, {});
  expect(wrapper.html()).toMatchSnapshot();
});
