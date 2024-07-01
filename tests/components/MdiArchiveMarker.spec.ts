
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveMarker from "../../src/components/MdiArchiveMarker.vue";

test("MdiArchiveMarker snapshot", () => {
  const wrapper = mount(MdiArchiveMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
