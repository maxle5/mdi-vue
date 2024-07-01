
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCampfire from "../../src/components/MdiCampfire.vue";

test("MdiCampfire snapshot", () => {
  const wrapper = mount(MdiCampfire, {});
  expect(wrapper.html()).toMatchSnapshot();
});
