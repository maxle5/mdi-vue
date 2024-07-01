
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileMarker from "../../src/components/MdiFileMarker.vue";

test("MdiFileMarker snapshot", () => {
  const wrapper = mount(MdiFileMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
