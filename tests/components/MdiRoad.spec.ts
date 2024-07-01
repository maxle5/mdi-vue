
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRoad from "../../src/components/MdiRoad.vue";

test("MdiRoad snapshot", () => {
  const wrapper = mount(MdiRoad, {});
  expect(wrapper.html()).toMatchSnapshot();
});
