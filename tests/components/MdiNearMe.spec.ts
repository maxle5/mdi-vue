
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNearMe from "../../src/components/MdiNearMe.vue";

test("MdiNearMe snapshot", () => {
  const wrapper = mount(MdiNearMe, {});
  expect(wrapper.html()).toMatchSnapshot();
});
