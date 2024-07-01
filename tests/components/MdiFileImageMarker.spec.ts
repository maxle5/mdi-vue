
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileImageMarker from "../../src/components/MdiFileImageMarker.vue";

test("MdiFileImageMarker snapshot", () => {
  const wrapper = mount(MdiFileImageMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
