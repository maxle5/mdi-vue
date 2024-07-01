
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreMarker from "../../src/components/MdiStoreMarker.vue";

test("MdiStoreMarker snapshot", () => {
  const wrapper = mount(MdiStoreMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
