
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCastEducation from "../../src/components/MdiCastEducation.vue";

test("MdiCastEducation snapshot", () => {
  const wrapper = mount(MdiCastEducation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
