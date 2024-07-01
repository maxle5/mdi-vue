
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilePlus from "../../src/components/MdiFilePlus.vue";

test("MdiFilePlus snapshot", () => {
  const wrapper = mount(MdiFilePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
