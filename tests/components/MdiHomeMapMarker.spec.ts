
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeMapMarker from "../../src/components/MdiHomeMapMarker.vue";

test("MdiHomeMapMarker snapshot", () => {
  const wrapper = mount(MdiHomeMapMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
