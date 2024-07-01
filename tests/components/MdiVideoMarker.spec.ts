
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoMarker from "../../src/components/MdiVideoMarker.vue";

test("MdiVideoMarker snapshot", () => {
  const wrapper = mount(MdiVideoMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
